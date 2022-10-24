const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT"


export const fetchPosts = async () => {
    try {
        const response = await fetch(`${BASEURL}/posts`)
        console.log("=====This is the response====", response)
        const { data } = await response.json();
        console.log("This is Data", data.posts)
        return data.posts
    } catch(error) {
        console.error("There was an error fetching posts", error)
    }
}

export const registerUser = async (username, password) => {
    try {
    const response = await fetch(`${BASEURL}/users/register`, { method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
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
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      console.log('User Resp Body -->', response)
      const {data} = await response.json();
      console.log('User Data -->', data);
      return data;
  }catch {
      console.log(error)
  }
}

// export default fetchPosts