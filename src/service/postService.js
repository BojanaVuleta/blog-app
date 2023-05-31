import { API } from "../shared/api";


export const getPosts=()=>{
    return API.get("/posts");
}

export const postPosts =({
    title,
    text,
    createdAt
})=>{
    return API.post("/posts",{
    title,
    text,
    createdAt

    })
}

export const getPostById = (id) => {
    return API.get(`/posts/${id}?filter={"include":["comments"]}`);
  };

export const editPostById = (id, car) => {
    return API.patch(`/posts/${id}`, car);
  };  

 export const deletePostById=(id)=>{
    return API.delete(`/posts/${id}`)
 } 

 export const addComment = (comment, postId) => {
    return API.post(`/posts/${postId}/comments`, comment);
  };

