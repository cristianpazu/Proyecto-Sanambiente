export default function handleMessage(response: any, code: number, message: any) {
    return response.status(code).json({message});
}