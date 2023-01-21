import React, { useState, useEffect, useRef } from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import RichTextEditor from 'react-rte';
import TextParser from 'react-text-parser';



function Manager() {
    const [BlogForm,setBlogForm] = useState(false)
    const [BlogFormDelete,setBlogFormDelete] = useState(false)
    const [blogItems, setBlogItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [blogTitle, setBlogTitle] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    const [editorState, setEditorState] = useState(RichTextEditor.createEmptyValue());

    const handleQuillChange = (value) => {
        setEditorState(value);
        setBlogDescription(value.toString('html'))
    }

    const deleteBlog = async (blogId) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:5000/blog/${blogId}`);
            console.log(response);
            // update the blogItems state and remove the deleted blog
            setBlogItems(blogItems.filter(blog => blog.id !== blogId));
        } catch (error) {
            console.log(error);
        }
    }

    const getBlogItems = () => {
        axios
            .get("http://127.0.0.1:5000/blog/getblogs")
            .then((response) => {
                console.log("getting", response.data);
                setBlogItems(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("getBlogItems error", error);
            });
    }

    useEffect(() => {
        getBlogItems();
    }, []);

    const blogRecords = blogItems.map(blogItem => {
        return <div key={blogItem.id}>
        <div className="title">{blogItem.title}</div> 
        <div className="description">
          <TextParser allowed={['p','em','strong','u']}>{blogItem.description}</TextParser>
        </div> 
        <button onClick={() => deleteBlog(blogItem.id)}>Delete</button>
        </div>
    })


    const handleAddBlogSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const payload = {
            name: blogTitle,
            description: editorState.toString('html')
        }
        try {
            await axios.post('http://127.0.0.1:5000/blog/postblog', payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setIsLoading(false);
            console.log("Blog added");
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        };
    }
    

    const AddBlogForm = () => (
            <React.Fragment key="add-blog-form">
            <h2>Add to Projects</h2>
            <form onSubmit={handleAddBlogSubmit}>
                <label htmlFor="name">Title:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={blogTitle}
                    onChange={e => setBlogTitle(e.target.value)}
                />

                <div className="React-Quill-Wrapper" style = {{ height: '500px' , width:'800px'}}>
                <label>Description:</label>
                <RichTextEditor
                    value={editorState}
                    onChange={handleQuillChange}
                    style={{ width: '30%', height: '300px' }}
                />
                
                </div>
                <button type="submit">Add to Blogs</button>
            </form> 
        </React.Fragment>
    );


    const DeleteBlogSelection = () => (
        <React.Fragment key="Delete-blog-selection">
            <div>
                {isLoading ? <p>Loading...</p> : blogRecords}
            </div>
        </React.Fragment>
    )

    

    return (
        <div>
            <h1>Manager</h1>
            <div className='Manager-Selection-Form-Wrapper'>
                {BlogForm ? AddBlogForm() : BlogFormDelete ? DeleteBlogSelection(): null}

                <div className="Manager-Selector-Wrapper">
                    <div className="Manager-Selection">
                        <button onClick={()=> setBlogForm(!BlogForm) || setBlogFormDelete(false)}>Add to Projects</button>
                    </div>
                    <div className="Manager-Selection">
                        <button onClick={()=> setBlogFormDelete(!BlogFormDelete) || setBlogForm(false)}>Remove from Projects</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Add to Certificates</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Remove from Certificates</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Add to Unfinished-Projects</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Remove From Unfinished-Projects</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Add to Blog</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Remove From Blog</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>edit Testimonial</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>remove Testimonial</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Manager);