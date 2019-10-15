export default function handleMessage(response, code, message) {
    return response.status(code).json({ message });
}
