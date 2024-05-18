type ErrorMessage = 
    'INVALID_CREDENTIALS' | 
    'INVALID_TOKEN' |
    'USER_ALREADY_EXISTS';

export default function em(message: ErrorMessage) {
    return message;
}