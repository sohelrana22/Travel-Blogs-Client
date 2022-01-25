import React from 'react';

const singleBlog = () => {
    return (
      <div class="w-full md:w-1/2 xl:w-1/3 px-4">
        <div class="bg-white rounded-lg overflow-hidden mb-10">
          <img
            src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
            alt=""
            class="w-full"
          />
          <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
            <h3>
              <p
                class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
              >
                50+ Best creative website themes & templates
              </p>
            </h3>
          </div>
        </div>
      </div>
    );
};

export default singleBlog;