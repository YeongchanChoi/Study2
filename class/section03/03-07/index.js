import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// The GraphQL schema
const typeDefs = `#graphql
input CreateBoardInput{
  writer:String
  title:String
  content:String
}
  type MyResult{
    number: Int
    writer:String
    title:String
    content:String
  }
  type Query {
    fetchBoards:[MyResult]
  }
  type Mutation{
    createBoard(createBoardInput:CreateBoardInput!):String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards: () => {
      const result = [
        { number: 1, writer: "A", title: "title", content: "content" },
        { number: 2, writer: "B", title: "title", content: "content" },
        { number: 2, writer: "C", title: "title", content: "content" },
      ];
      //2. DB 결과 브라우저 응답
      return result;
    },
  },
  Mutation: {
    createBoard: (_, args) => {
      console.log(args.createBoardInput.writer);
      console.log(args.createBoardInput.title);
      console.log(args.createBoardInput.content);
      return "successfully uploaded";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
