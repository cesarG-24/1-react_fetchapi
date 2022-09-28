import {useEffect, useState} from "react";

export const useApiPosts = () => {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState({
        users: [], posts: [], comments: [],});

   useEffect(() =>{const getUserDta = async () => {
        const res = await fetch(`https://dummyjson.com/users?limit=16&skip=${counter * 16}`);
        const json = await res.json();
        const usersData = json.users;
        
        return usersData;
    }
    const getPostsDta = async () => {
        const res = await fetch(`https://dummyjson.com/posts?limit=16&skip=${counter * 16}`);
        const json = await res.json();
        const postsData = json.posts;
        
        return postsData;
    }
    const getCommentsDta = async () => {
        const res = await fetch(`https://dummyjson.com/comments?limit=16&skip=${counter * 16}`);
        const json = await res.json();
        const postsComments = json.comments;
        
        return postsComments;
    }
       (async () => {
           const users = await getUserDta();
           const posts = await getPostsDta();
           const comments = await getCommentsDta();

           setData({
               users, posts, comments,
           })
       })()

    },[counter]);

    const postsHandler = data.posts.map(post => {
        return {
            ...post,
            author: data.users.find(user => (user ? user.id === post.id : user.id === post.userId)),
            feedback: data.comments.find((comment) => (comment ? comment.id === post.id : comment.postId === post.id))
        }
    })

    const nextPage = () => {
        if (counter >= 6) return;
        setCounter((counter) => counter + 1);
    }

    const prevPage = () => {
        if (counter <= 0) return;
        setCounter((counter) => counter - 1);
    }


    return {
        postsHandler, nextPage, prevPage, counter,
    }
}

