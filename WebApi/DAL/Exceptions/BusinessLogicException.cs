using System;
using System.Runtime.Serialization;

namespace DAL.Exceptions
{
    [Serializable]
    public class BusinessLogicException : Exception
    {
        public BusinessLogicException()
        {
        }

        public override string Message => base.Message;

        public BusinessLogicException(string message): base(message)
        {
        }

        public BusinessLogicException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
