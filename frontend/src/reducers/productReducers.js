
function productListreducer(state= {products: []}, action) {

    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return{loading: true};
            case PRODUCT_LIST_SUCCESS:
                return {loading:false, product: action.payload };
                case PRODUCT_LIST_FAIL:
                    return { loading: false, error: action.payload}
                    default:
                        return state;



     }
    }

    export { productListreducer}