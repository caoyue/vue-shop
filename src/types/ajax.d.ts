declare namespace Ajax {
    // axios response type
    export interface AxiosResponse<T> {
        data: AjaxResponse<T>;
    }

    // api response type
    export interface AjaxResponse<T> {
        // success
        success: boolean;

        // error code
        code: number;

        // data
        result: T;
    }
}
