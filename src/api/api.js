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
//     const response = await fetch(`${BASEURL}/users/register`, { method: "POST",
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
  const options = {
    headers: makeHeaders(defaultOptions.token),
  };

if (defaultOptions.method) {
  options.method = defaultOptions.method;
}

if (defaultOptions.body) {
  options.body = JSON.stringify(defaultOptions.body);
}

  const response = await fetch(`${BASEURL}${endpointPath}`, options);
  const result = await response.json();

  return result;
};


//fetch functions
export const fetchPosts = async () => {
  try {
      const {success, error, data} = await callAPI('/posts');

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
  } catch(error) {
      console.error("There was an error fetching posts", error)

      return {
        error: "Failed to load Posts",
        posts: []
      };
  }
};

export const registerUser = async (username, password) => {
  try {
  const response = await fetch(`${BASEURL}/users/register`, { method: "POST",
  headers: makeHeaders(),
  body: JSON.stringify({
    user: {
      username,
      password,
    },
  }),
  });
  console.log("response...", response)
  const data = await response.json();
  console.log("data....", data)
  return data;
} catch(error) {
  console.error("There was an error registering the user,", error);
}
};

export const fetchGuest = async(token) => {
try {
    const response = await fetch(`${BASEURL}/users/me`, {
      headers: makeHeaders(token),
    });
    console.log('User Resp Body -->', response)
    const {data} = await response.json();
    console.log('User Data -->', data);
    return data;
}catch {
    console.log(error)
}
};

