import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CustomHeader from "./CustomHeader";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      project: "Lego House Architecture",
      review:
        "I had an outstanding experience with A&W Technologies. They created a fantastic website for Lego House Architecture, delivering the project on time and exceeding my expectations. Their professionalism, attention to detail, and innovative design approach truly set them apart. Highly recommended for web development needs!",
      name: "Kushagra",
    },
    {
      project: "IndieStreet",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore numquam cumque perspiciatis, veniam consectetur pariatur reprehenderit velit quis voluptatibus veritatis, nobis molestias, obcaecati magnam repellendus eius perferendis voluptatem culpa sint?",
      name: "Client Name",
    },
    // {
    //   project: "Project Name",
    //   review:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore numquam cumque perspiciatis, veniam consectetur pariatur reprehenderit velit quis voluptatibus veritatis, nobis molestias, obcaecati magnam repellendus eius perferendis voluptatem culpa sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reprehenderit quaerat iste expedita culpa non dolor, maiores necessitatibus voluptatibus hic vel est totam repudiandae quisquam aliquid itaque! Mollitia, cupiditate ea!",
    //   name: "Client Name",
    // },
    // {
    //   project: "Project Name",
    //   review:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore numquam cumque perspiciatis, veniam consectetur pariatur reprehenderit velit quis voluptatibus veritatis, nobis molestias, obcaecati magnam repellendus eius perferendis voluptatem culpa sint?",
    //   name: "Client Name",
    // },
    // {
    //   project: "Project Name",
    //   review:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore numquam cumque perspiciatis, veniam consectetur pariatur reprehenderit velit quis voluptatibus veritatis, nobis molestias, obcaecati magnam repellendus eius perferendis voluptatem culpa sint?",
    //   name: "Client Name",
    // },
    // {
    //   project: "Project Name",
    //   review:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore numquam cumque perspiciatis, veniam consectetur pariatur reprehenderit velit quis voluptatibus veritatis, nobis molestias, obcaecati magnam repellendus eius perferendis voluptatem culpa sint?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur repudiandae tenetur dolores porro ullam ipsa quasi cum distinctio deleniti ratione maxime et harum fugit fugiat soluta fuga quae, nulla quas.",
    //   name: "Client Name",
    // },
  ];
  return (
    <>
      <section className="bg-black lg:py-5 py-12">
        <div className="max-w-[100rem] mx-auto px-[5%]">
          <CustomHeader
            header1="Reviews"
            header2="Testmonials"
            className="before:-right-3 lg:mb-10 mb-6"
          />
          <div className="testimonials lg:px-[5%] md:px-[3%] px-[7%]">
            <Carousel
              opts={{
                loop: true,
              }}
            >
              <CarouselContent className="lg:py-20 py-10">
                {testimonials.map((review, index) => (
                  <CarouselItem
                    className="md:px-8 px-3 md:ml-0 ml-3 lg:basis-2/3 md:basis-4/5 sm:basis-11/12 basis-full"
                    key={index}
                  >
                    <Card className="text-white relative border border-[#ff5900] lg:pl-32 pl-0 lg:h-56 md:h-64 h-72 bg-transparent md:hover:scale-105 ease-in-out transition-all duration-200">
                      <CardHeader className="p-0 relative">
                        <div className="md:w-24 w-20 md:h-24 h-20 absolute lg:-left-24 lg:translate-x-0 left-1/2 transform -translate-x-1/2 lg:-top-14 -top-10 rounded-full overflow-hidden border border-[#ff5900]">
                          {/* <Image
                          alt=""
                            width={1000}
                            height={1000}
                            className="w-full h-full"
                            src=""
                            // /assets/sanjay-sir.jpg
                          /> */}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white mt-7 flex flex-col">
                          <span className="mb-2 lg:text-lg text-base">
                            {review.project}
                          </span>
                          <span className="lg:line-clamp-5 lg:!text-base !text-sm">
                            {review.review}
                          </span>
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="absolute py-0 right-5 bottom-5 h-5 before:w-10 before:h-0.5 before:absolute before:top-2.5 before:-left-16 before:bg-white lg:!text-base !text-sm">
                        {review.name}
                      </CardFooter>
                    </Card>
                    {/* <TestimonialCard review={review} /> */}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover:scale-125 hover:bg-white hover:text-[#ff5900] hover:border-white" />
              <CarouselNext className="hover:scale-125 hover:bg-white hover:text-[#ff5900] hover:border-white" />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
