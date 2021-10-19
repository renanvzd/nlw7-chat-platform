import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      errorCode: "token.invalid",
    });
  }


  const [, token] = authToken.split(" ")
  //Bearer 8948das6df8s4dfa684daf6s8fda
  // [0] Bearer
  // [1] 8948das6df8s4dfa684daf6s8fda

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload

    request.user_id = sub;

    return next();

  } catch (err) {
    return response.status(401).json({ errorCode: "token.expired" })
  }

}