const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT"

// export const fetchPosts = async () => {
//     try {
//         const response = await fetch(`${BASEURL}/posts`)
//         console.log("=====This is the response====", response)
//         const { data } = await response.json();
//         console.log("This is Data", data.posts)
//         return data.posts
//     } catch(error) {
//         console.error("There was an error fetching posts", error)
//     }
// };

// export const registerUser = async (username, password) => {
//     try {
//     const response = await fetch(`${BASEURL}/users/register`, { 
    // method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       user: {
//         username,
//         password,
//       },
//     }),
//     });
//     console.log("response...", response)
//     const data = await response.json();
//     console.log("data....", data)
//     return data;
// } catch(error) {
//     console.error("There was an error registering the user,", error);
// }
// };

// export const fetchGuest = async(token) => {
//   try {
//       const response = await fetch(`${BASEURL}/users/me`, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//       });
//       console.log('User Resp Body -->', response)
//       const {data} = await response.json();
//       console.log('User Data -->', data);
//       return data;
//   }catch {
//       console.log(error)
//   }
// };


//Helper functions
const makeHeaders = (token) => {
  const headers =  {
    'Content-Type': 'application/json'
  };
  
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  return headers;
};

const callAPI = async (endpointPath, defaultOptions={}) => {
  const {token, method, body} = defaultOptions;

  const options = {
    headers: makeHeaders(token),
  };

if (method) {
  options.method = method;
}

if (body) {
  options.body = JSON.stringify(body);
}

  const response = await fetch(`${BASEURL}${endpointPath}`, options);
  const result = await response.json();

  return result;
};


//fetch functions
export const fetchPosts = async (token) => {
  try {
    const {success, error, data} = await callAPI('/posts', {
      token: token
    });

    if (success) {
      return {
        error: null,
        posts: data.posts
      };
    } else {
      return {
        error: error.message,
        posts: []
      };
    }
  } catch (error) {
    console.error("There was an error registering the user,", error);

    return {
      error: 'Failed to load Posts',
      posts: []
    };
  }
};

export const registerUser = async (username, password) => {
  try {
    const {success, error, data} = await callAPI('/users/register', {
      method: 'POST',
      body: {
        user: {
              username,
              password,
        },
      }
    });

    if (success) {
      return {
        error: null,
        token: data.token,
        message: data.message
      };
    } else {
      return {
        error: error.message,
        token: null,
        message: null
      };
    } 
  } catch(error) {
  console.error("There was an error registering the user,", error);

    return {
      error: 'Registration Failed.',
      token: null,
      message: null
    };
  }
};

export const loginUser = async (username, password) => {
  try {
    const {success, error, data} = await callAPI('/users/login', {
      method: 'POST',
      body: {
        user: {
              username,
              password,
        },
      }
    });

    if (success) {
      return {
        error: null,
        token: data.token,
        message: data.message
      };
    } else {
      return {
        error: error.message,
        token: null,
        message: null
      };
    } 
  } catch(error) {
  console.error("There was an error registering the user,", error);

    return {
      error: 'Registration Failed.',
      token: null,
      message: null
    };
  }
};

export const fetchGuest = async (token) => {
  try {
    const {success, error, data} = await callAPI('/users/me', {
      token: token
    });

    if (success) {
      return {
      error: null,
      username: data.username
      }
    } else {
      return {
        error: error.message,
        username: null
      }
    }
  } catch (error) {
    console.error('failed to fetch guest', error)

    return {
      error: 'Failed to load username information',
      username: null
    };
  }
};

export const createPost = async (token, title, description, price, location, willDeliver) => {

  try {
    const post = {
      description: description
    };

    if (location) {
      post.location = location;
    }

    if (price) {
      post.price = price;
    }

    if (willDeliver) {
      post.willDeliver = willDeliver;
    }

    const {success, error, data} = await callAPI('/posts', {
      token: token,
      method: "POST",
      body: {
        post: {
        title,
        description,
        price,
        location,
        willDeliver
        }
      }
      
    });

    if (success) {
      return {
        error: null,
        post: data.post
      };
    } else {
      return {
        error: error.message,
        post: null
      };
    }
  } catch (error) {
    console.error('Post /posts failed:', error);

    return {
      error: 'Failed to create Post',
      post: null
    }
  }
};

export const addComment = async (token, postId, message) => {
  try {
    const { success, error, data } = await callAPI(`/posts/${postId}/messages`, {
      token: token,
      method: "POST",
      body: {
        message: {
        content: message
        },
      },
    });

    if (success) {
      return {
        success: success,
        error: null,
        message: data.message
      };
    } else {
      return {
        success: success,
        error: error.message,
        message: null
      };
    }
  } catch (error) {
    console.error(`Post /posts/${postId}/messages failed:`, error);

    return {
      success: false,
      error: 'Failed to create message for post',
      message: null
    };
  };
}

export const deletePost = async (token, postId) => {
  try {
    const {success, error, data} = await callAPI(`/posts/${postId}`, {
      method: "DELETE",
      token: token
    });

      if (success) {
        return {
          error: null,
          data: null
        }; 
        } else {
          return {
            error: error.message,
            data: null
          };
        }
  }catch(error) {
      console.error("DELETE /posts/postId failed:", error);
      return {
        error: "Failed to delete post",
        data: null
      };
  }
}