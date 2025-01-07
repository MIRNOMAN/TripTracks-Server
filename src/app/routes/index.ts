import { Router } from "express"



const router = Router()

const moduleRoutes = [
  {
    path: '/',
    route: UserRoutes,
  },
//   {
//     path: '/auth',
//     route: AuthRoutes,
//   },
//   {
//     path: '/bookings',
//     route: BookingsRoutes,
//   },
//   {
//     path: '/payment',
//     route: PaymentRoutes,
//   },
//   {
//     path: '/post',
//     route: PostRoutes,
//   },
//   {
//     path: '/comment',
//     route: CommentRoutes,
//   },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router