interface ErrorResponse {
  message?: string | string[];
}

export const getErrorMessage = (response: ErrorResponse) => {
    if (response.message) {
      if (Array.isArray(response.message)) {
        return formatErrorMessage(response.message[0]);
      }
      return formatErrorMessage(response.message);
    }
    return "Unknown error occured.";
  };
  
  const formatErrorMessage = (message: string) => {
    return message.charAt(0).toUpperCase() + message.slice(1);
  };