import { imageClient } from "."

export const UploadImage = async (image) => {
    try {
        const response = await imageClient.post(`/v1/upload`, image)
        return response
    } catch (err) {
        console.log(err)
        return null
    }
}