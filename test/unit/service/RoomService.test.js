import RoomService from "../../../src/service/RoomService";

describe("Tests RoomService.class", () => {

    it("Should return one new room", async () => {
        const roomFake = {
          name: "Room Test"
        };

        const daoFake = {
            create: sinon.stub().returns(roomFake)
        };

        const roomService = new RoomService(daoFake);
        const response = await roomService.create(roomFake);
        expect(roomFake.name).to.equal(response.name);
    });

    it("Should find all rooms", async () => {
        const roomsFake = [
            { name: "Teste 1" },
            { name: "Teste 2" },
            { name: "Teste 3" },
        ];

        const daoFake = {
            find: sinon.stub().returns(roomsFake)
        };

        const roomService = new RoomService(daoFake);
        const response = await roomService.findAll();
        expect(3).to.equal(response.length);
    })
});