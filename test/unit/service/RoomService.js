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
        expect(response.name).to.equal(roomFake.name);
    })
});