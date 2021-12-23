import axios from "axios";

export async function getSlides() {
    try {
        const response = await axios.get("http://localhost:8080/post")
        return response.data
    }
    catch (e) {
        console.log(e)
    }
}

export async function deletePost(id, setSlides) {
    try {
        const res = await axios.delete(`http://localhost:8080/post/${id}`)
        return setSlides(res.data)

    } catch (e) {
        console.log(e)
    }
}

export async function postReview(post) {
    try {
        const response = await axios.post('http://localhost:8080/post', post)
        //возвращает актуальный массив с базы данных
        return response.data
    } catch (e) {
        console.log(e)
    }
}
