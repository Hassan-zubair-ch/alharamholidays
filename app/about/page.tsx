"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TrustBadges } from "@/components/about/TrustBadges";
import { COMPANY } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal-dark py-20 sm:py-28">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/90 to-charcoal-dark" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Al Haram Travel
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your trusted partner for luxury holidays and Umrah. Based in the UK, serving the world.
          </motion.p>
        </div>
      </section>

      {/* Company story */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl font-bold text-charcoal sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 leading-relaxed text-charcoal-light">
                With over 30 years of experience in retail and wholesale travel, Al Haram Travel UK
                brings together the best of tradition and modern service. We started with a simple
                mission: to make premium travel and Umrah accessible, trustworthy, and unforgettable.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal-light">
                Today we are available online so you can book your tickets and hotels direct with us
                and save with special fares and prices. Whether you prefer to browse and book
                online or drop us a line, we are here for you.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal-light">
                We specialise in Umrah packages and luxury holidays from our base in Luton, UK.
                Our team offers personalised advice, competitive rates, and end-to-end support so
                your trip is seamless from the first call to your return home.
              </p>
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80"
                alt="Travel agency"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Mission & values */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-center font-serif text-3xl font-bold text-charcoal sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mission & Values
          </motion.h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Trust",
                description:
                  "We build long-term relationships through transparency, fair pricing, and reliable service.",
              },
              {
                title: "Excellence",
                description:
                  "From Umrah to luxury holidays, we deliver premium experiences at every touchpoint.",
              },
              {
                title: "Care",
                description:
                  "Every journey matters. We treat every traveller with the attention and care they deserve.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-serif text-xl font-bold text-emerald-deep">{item.title}</h3>
                <p className="mt-3 text-charcoal-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & experience - animated counters */}
      <section className="relative overflow-hidden bg-charcoal-dark py-20 sm:py-24">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-center font-serif text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trust & Experience
          </motion.h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-5xl font-bold text-gold sm:text-6xl">
                <AnimatedCounter value={COMPANY.yearsExperience} suffix="+" />
              </p>
              <p className="mt-2 text-lg text-gray-300">Years of Experience</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-5xl font-bold text-gold sm:text-6xl">
                <AnimatedCounter value={COMPANY.happyTravelers} />
              </p>
              <p className="mt-2 text-lg text-gray-300">Happy Travelers</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
