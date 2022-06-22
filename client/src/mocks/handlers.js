import { rest } from "msw";

export const handlers = [
  rest.get("/cars", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          _id: '62d220ba1d4e540776a37d0f',
          make: 'Volkswagen',
          model: 'Golf',
          variant: '2.0 TSI 150',
          notificationThreshold: 300,
          notification: false,
          lowestPrice: 315,
          __v: 0
        },
        {
          _id: '62b220ba1d6e540746a37d11',
          make: 'Cupra',
          model: 'Ateca Estate',
          variant: '2.0 TSI VZ2 5dr DSG 4Drive',
          notificationThreshold: 300,
          notification: false,
          lowestPrice: 250,
          __v: 0
        }
      ])
    )
  })
]