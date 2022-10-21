

export const errorException = class errorException {
    constructor(message="Internal server error.",stacks=null) {
        return ({erro:{message,stacks}}) 
    }
}

export class UserExceptionErroRes{
    constructor(res,status,mensagem,stack=null){
         return res.status(status).json({ erro: {
            mensagem,
            stack
          },
        })

    }
}

// module.exports = {
//     /* for all the positive response */
//     yahResponse: async (res, data) => {
//       res.status(200).json({ status: true, data });
//     },
//     /* when something goes wrong */
//     nahResoonse: async (res, error, code) => {
//       res.status(500).json({ status: false, code });
//     },
//     /* when we want send manual error messages */
//     errorMessage: async (res, message) => {
//       res.status(200).json({ status: false, message });
//     },
//   };
  