import * as CatAction from "./action"

//초기 스테이트 정해주기
const initialState = {
    CatsData: {
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
export default function cats (state = initialState, action) {
    switch (action.type) {
        //데이터 가져오기
        case CatAction.GET_CAT_DATA:
            return {
                ...state,
                CatsData: {
                    loading: state.CatsData.data,
                    error: null,
                    data: null
                }
            };
        case CatAction.GET_CAT_DATA_SUCCESS:
            return {
                ...state,
                CatsData: {
                    loading: false,
                    error: null,
                    data: action.CatsData
                }
            };
        case CatAction.GET_CAT_DATA_ERROR:
            return {
                ...state,
                CatsData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        //데이터 가져오기
        case CatAction.GET_O_CAT_DATA:
            return {
                ...state,
                detailData: {
                    loading: state.detailData.data,
                    error: null,
                    data: null
                }
            };
        case CatAction.GET_O_CAT_DATA_SUCCESS:
            return {
                ...state,
                detailData: {
                    loading: false,
                    error: null,
                    data: action.detailData
                }
            };
        case CatAction.GET_O_CAT_DATA_ERROR:
            return {
                ...state,
                detailData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        //데이터 올리기
        case CatAction.POST_CAT_DATA:
            return {
                ...state,
                postData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case CatAction.POST_CAT_DATA_SUCCESS:
            return {
                ...state,
                postData: {
                    loading: false,
                    error: null,
                    data: action.postData
                }
            };
            case CatAction.POST_CAT_DATA_ERROR:
                return {
                    ...state,
                    postData: {
                        loading: false,
                        error: action.error,
                        data: null
                    }
                };
        //데이터 삭제하기
        case CatAction.DEL_CAT_DATA:
            return {
                ...state,
                delData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case CatAction.DEL_CAT_DATA_SUCCESS:
            return {
                ...state,
                delData: {
                    loading: false,
                    error: null,
                    data: action.delData
                }
            };
        case CatAction.DEL_CAT_DATA_ERROR:
            return {
                ...state,
                delData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        //데이터 수정하기
        case CatAction.PUT_CAT_DATA:
            return {
                ...state,
                putData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case CatAction.PUT_CAT_DATA_SUCCESS:
            return {
                ...state,
                putData: {
                    loading: false,
                    error: null,
                    data: action.putData
                }
            };
        case CatAction.PUT_CAT_DATA_ERROR:
            return {
                ...state,
                putData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        //좋아요 클릭
        case CatAction.PATCH_CAT_DATA:
            return {
                ...state,
                patchData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case CatAction.PATCH_CAT_DATA_SUCCESS:
            return {
                ...state,
                patchData: {
                    loading: false,
                    error: null,
                    data: action.patchData
                }
            };
        case CatAction.PATCH_CAT_DATA_ERROR:
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