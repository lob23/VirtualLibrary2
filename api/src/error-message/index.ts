type ErrorMessage = 'INVALID_CREDENTIALS' | 'USER_ALREADY_EXISTS';

export default function em(message: ErrorMessage) {
    return message;
}