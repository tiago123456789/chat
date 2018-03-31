import MessageService from "../../../src/service/MessageService";

describe("Tests MessageService.js", () => {

    it("Should returned one message to the created message", async () => {
        const messageFake = {
            created_at: Date.now(),
            author: "Author test",
            type: "msg",
            content: "Message content test",
            room: "1524a"
        };

        const daoFake = {
            create: sinon.stub().returns(messageFake)
        };

        const messageService = new MessageService(daoFake);
        const response = await messageService.create(messageFake);
        expect(messageFake).to.equal(response);
    });

    it("Should returned all messages with base in filters", async () => {
        const filterFake = { room: "1234a" };
        const messagesFake = [
            {
                created_at: Date.now(),
                author: "Author test",
                type: "msg",
                content: "Message content test",
                room: "1524a"
            },
            {
                created_at: Date.now(),
                author: "Author test",
                type: "msg",
                content: "Message content test",
                room: "1524a"
            },
            {
                created_at: Date.now(),
                author: "Author test",
                type: "msg",
                content: "Message content test",
                room: "1524a"
            }
        ];
        const daoFake = {
            find: sinon.stub()
        };

        daoFake.find.withArgs(filterFake).returns(messagesFake);
        const messageService = new MessageService(daoFake);
        const response = await messageService.findBy(filterFake);
        expect(messagesFake.length).to.equal(response.length);
    });
});