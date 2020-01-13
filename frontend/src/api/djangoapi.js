import axios from 'axios';

//리스트 가져오기
export async function getTodo() {
    const res = await axios.get(
        'http://127.0.0.1:8000/api/posts/'
    );
    return res.data;
}
//디테일 리스트 가져오기 
export async function getDetailTodo(id) {
    const res = await axios.get(
        'http://127.0.0.1:8000/api/posts/'+id+'/'
    );
    return res.data;
}
//리스트 추가
export async function postTodo(formdata) {
    const res = await axios.post(
        'http://127.0.0.1:8000/api/posts/',formdata, {
            headers:{
                'content-type': 'mutipart/form-data'
            }  
        }
    );
    return res.data;
}
//리스트 제거
export async function delTodo(id) {
    const res = await axios.delete(
        'http://127.0.0.1:8000/api/posts/'+id+'/'
    );
    return res.data;
}
//리스트 패치
export async function patchTodo(id, data) {
    
    const res = await axios.patch(
        'http://127.0.0.1:8000/api/posts/'+id+'/', {title:data=!data}
    );
    return res.data;
}
//리스트 수정
export async function putTodo(id, data) {
    const res = await axios.put(
        'http://127.0.0.1:8000/api/posts/'+id+'/', data, {
            headers: {
                'content-type' : 'mutipart/form-data'
            }
        }
        );
        console.log(id, data)
        return res.data
}