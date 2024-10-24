export const getAndFormatResponseErrorMessage = (responseError: ResponseError) => {
    const errorMessage =
        typeof responseError.message === "string"
            ? responseError.message
            : responseError.message[0];

    const formattedString =
        errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
    
    return formattedString;
};