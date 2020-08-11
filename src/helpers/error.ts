import { AxiosRequestConfig, AxiosResponse } from '../types'

export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
  /* istanbul ignore next */
  // 忽略了整个构造函数的测试，这样我们就可以达到 100% 的覆盖率了。
  // 在我们去阅读一些开源代码的时候经常会遇到，主要用途就是用来忽略测试用的，这个技巧不可滥用，除非你明确的知道这段代码不需要测试，否则你不应该使用它。滥用就失去了单元测试的意义了。
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)

    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

// 创建工厂函数，方便外面调用
export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
): AxiosError {
  const error = new AxiosError(message, config, code, request, response)

  return error
}
