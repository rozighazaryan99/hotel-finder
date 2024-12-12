export const queryKeys = {
    hotels: {
        all: ["hotels"],
        byId: (id: number) => ["hotels", id],
    },
};