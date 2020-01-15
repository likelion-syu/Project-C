import * as PostAction from "./action"

//초기 스테이트 정해주기
const initialState = {
    PostsData: {
        loading: false,
        error: null,
        data: null
    },
    detailData: {
        loading: false,
        error: null,
        data: null
    },
    postData: {
        loading: false,
        error: null,
        data: null
    },
    delData: {
        loading: false,
        error: null,
        data: null
    },
    putData: {
        loading: false,
        error: null,
        data: null
    },
    patchData: {
        loading: false,
        error: null,
        data: null
    }
};

//TodoList리듀서
export default function posts (state = initialState, action) {
    switch (action.type) {
        //데이터 가져오기
        case PostAction.GET_POST_DATA:
            return {
                ...state,
                PostsData: {
                    loading: state.PostsData.data,
                    error: null,
                    data: null
                }
            };
        case PostAction.GET_POST_DATA_SUCCESS:
            return {
                ...state,
                PostsData: {
                    loading: false,
                    error: null,
                    data: action.PostsData
                }
            };
        case PostAction.GET_POST_DATA_ERROR:
            return {
                ...state,
                PostsData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        //데이터 가져오기
        case PostAction.GET_O_POST_DATA:
            return {
                ...state,
                detailData: {
                    loading: state.detailData.data,
                    error: null,
                    data: null
                }
            };
        case PostAction.GET_O_POST_DATA_SUCCESS:
            return {
                ...state,
                detailData: {
                    loading: false,
                    error: null,
                    data: action.detailData
                }
            };
        case PostAction.GET_O_POST_DATA_ERROR:
            return {
                ...state,
                detailData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        //데이터 올리기
        case PostAction.POST_POST_DATA:
            return {
                ...state,
                postData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case PostAction.POST_POST_DATA_SUCCESS:
            return {
                ...state,
                postData: {
                    loading: false,
                    error: null,
                    data: action.postData
                }
            };
            case PostAction.POST_POST_DATA_ERROR:
                return {
                    ...state,
                    postData: {
                        loading: false,
                        error: action.error,
                        data: null
                    }
                };
        //데이터 삭제하기
        case PostAction.DEL_POST_DATA:
            return {
                ...state,
                delData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case PostAction.DEL_POST_DATA_SUCCESS:
            return {
                ...state,
                delData: {
                    loading: false,
                    error: null,
                    data: action.delData
                }
            };
        case PostAction.DEL_POST_DATA_ERROR:
            return {
                ...state,
                delData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        //데이터 수정하기
        case PostAction.PUT_POST_DATA:
            return {
                ...state,
                putData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case PostAction.PUT_POST_DATA_SUCCESS:
            return {
                ...state,
                putData: {
                    loading: false,
                    error: null,
                    data: action.putData
                }
            };
        case PostAction.PUT_POST_DATA_ERROR:
            return {
                ...state,
                putData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        //좋아요 클릭
        case PostAction.PATCH_POST_DATA:
            return {
                ...state,
                patchData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case PostAction.PATCH_POST_DATA_SUCCESS:
            return {
                ...state,
                patchData: {
                    loading: false,
                    error: null,
                    data: action.patchData
                }
            };
        case PostAction.PATCH_POST_DATA_ERROR:
            return {
                ...state,
                patchData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
            default:
                return state;
    }
};