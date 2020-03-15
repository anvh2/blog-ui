import { blogClient } from ".";

export const GetBlog = async (blogID) => {
    try {
        const response = await blogClient.get(`/v1/blog/${blogID}`)
        return response
    } catch (err) {
        console.log(err)
        return null
    }
}

export const CreateBlog = async (blog) => {
    try {
        const response = await blogClient.post("/v1/create", blog)
        return response
    } catch (err) {
        return null
    }
}

export const UpdateBlog = async () => {
    try {
        const response = await blogClient.put("/v1/")
        return response
    } catch (err) {
        return null
    }
}
