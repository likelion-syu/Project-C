import axios from 'axios';

//---------- Cat ----------//

//리스트 가져오기
export async function getCat() {
    const res = await axios.get(
        '/api/cats/'
    );
    return res.data;
}
//디테일 리스트 가져오기 
export async function detailCat(id) {
    const res = await axios.get(
        '/api/cats/'+id+'/'
    );
    return res.data;
}
//리스트 추가
export async function postCat(formdata) {
    const res = await axios.post(
        '/api/cats/',formdata, {
            headers:{
                'content-type': 'mutipart/form-data'
            }  
        }
    );
    return res.data;
}
//리스트 제거
export async function delCat(id) {
    const res = await axios.delete(
        '/api/cats/'+id+'/'
    );
    return res.data;
}
//리스트 패치
export async function patchCat(id, data) {
    
    const res = await axios.patch(
        '/api/cats/'+id+'/', {title:data=!data}
    );
    return res.data;
}
//리스트 수정
export async function putCat(id, data) {
    const res = await axios.put(
        '/api/cats/'+id+'/', data, {
            headers: {
                'content-type' : 'mutipart/form-data'
            }
        }
	);
	return res.data
}

//---------- Post ----------//

//리스트 가져오기
export async function getPost(token) {
    const res = await axios.get('/api/posts/',);
    return res.data;
}
//디테일 리스트 가져오기 
export async function detailPost(id) {
    const res = await axios.get(
        '/api/posts/'+id+'/'
    );
    return res.data;
}
//리스트 추가
export async function postPost(formdata) {
    const res = await axios.post(
        '/api/posts/',formdata, {
            headers:{
                'content-type': 'mutipart/form-data'
            }  
        }
    );
    return res.data;
}
//리스트 제거
export async function delPost(id) {
    const res = await axios.delete(
        '/api/posts/'+id+'/'
    );
    return res.data;
}
//리스트 패치
export async function patchPost(id, data) {
    
    const res = await axios.patch(
        '/api/posts/'+id+'/', {title:data=!data}
    );
    return res.data;
}
//리스트 수정
export async function putPost(id, data) {
    const res = await axios.put(
        '/api/posts/'+id+'/', data, {
            headers: {
                'content-type' : 'mutipart/form-data'
            }
        }
	);
	return res.data
}