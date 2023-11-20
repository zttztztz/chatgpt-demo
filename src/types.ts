export interface ChatMessage {
  role: 'user' | 'system' | 'assistant'
  content: string
}

export interface ErrorMessage {
  code: string
  message: string
}
