import defaults from './defaults'
// import {  } from './utils'

export default class YoutubeModal {
  options = {}

  constructor(options = {}) {
    this.options = Object.assign({}, defaults, options)
    this.addHtml()
  }

  addHtml() {
    const modal = document.createElement('div')
    modal.classList.add('youtube-modal')
    modal.setAttribute('x-cloak', '')
    modal.setAttribute('x-show', 'youtubeModalVideoId')
    modal.setAttribute('x-transition:enter', 'ease-out duration-300')
    modal.setAttribute('x-transition:enter-start', 'opacity-0')
    modal.setAttribute('x-transition:enter-end', 'opacity-100')
    modal.setAttribute('x-transition:leave', 'ease-in duration-150')
    modal.setAttribute('x-transition:leave-start', 'opacity-100')
    modal.setAttribute('x-transition:leave-end', 'opacity-0')
    modal.innerHTML = `
      <div class="flex items-center justify-center min-h-screen px-4 pt-4 text-center">
        <div
            class="fixed inset-0 transition-opacity"
            aria-hidden="true"
        >
            <div class="absolute inset-0 bg-gray-800 opacity-85"></div>
        </div>
        <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
            <button
                @click="youtubeModalVideoId = ''"
                type="button"
                class="text-white rounded-md hover:text-text-white/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
                <span class="sr-only">Close</span>
                <!-- Heroicon name: outline/x -->
                <svg
                    class="w-6 h-6 md:w-12 md:h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
        <div
            @click.away="youtubeModalVideoId = ''"
            x-show="youtubeModalVideoId"
            x-transition:enter="ease-out duration-300 scale-95 delay-200"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            x-transition:leave="ease-in duration-100"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0 scale-95"
            class="container max-w-screen-lg mx-auto transition-all"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
        >
            <div class="relative w-full aspect-w-16 aspect-h-9">
                <iframe
                    class="absolute w-full h-full overflow-hidden"
                    width="560"
                    height="315"
                    :src="'https://www.youtube.com/embed/' + youtubeModalVideoId + '?autoplay=1&rel=0'"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
    `
    // modal.innerHTML = `
    //   <div class="youtube-modal-wrapper">
    //     <div class="youtube-modal-bg" aria-hidden="true">
    //       <div class="youtube-modal-bg-cover"></div>
    //     </div>
    //     <div class="youtube-modal-button-container">
    //       <button
    //         @click="youtubeModalVideoId = ''"
    //         type="button"
    //         class="youtube-modal-button"
    //       >
    //         <span class="sr-only">Close</span>
    //         <!-- Heroicon name: outline/x -->
    //         <svg
    //           class="youtube-modal-button-icon"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           aria-hidden="true"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M6 18L18 6M6 6l12 12"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <div
    //       @click.away="youtubeModalVideoId = ''"
    //       x-show="youtubeModalVideoId"
    //       x-transition:enter="ease-out duration-300 scale-95 delay-200"
    //       x-transition:enter-start="opacity-0"
    //       x-transition:enter-end="opacity-100"
    //       x-transition:leave="ease-in duration-100"
    //       x-transition:leave-start="opacity-100"
    //       x-transition:leave-end="opacity-0 scale-95"
    //       class="youtube-modal-container"
    //       role="dialog"
    //       aria-modal="true"
    //       aria-labelledby="modal-headline"
    //     >
    //       <div class="youtube-modal-iframe-container">
    //         <iframe
    //           class="youtube-modal-iframe"
    //           width="560"
    //           height="315"
    //           :src="'https://www.youtube.com/embed/' + youtubeModalVideoId + '?rel=0&autoplay=0'"
    //           frameborder="0"
    //           allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
    //           allowfullscreen
    //         ></iframe>
    //       </div>
    //     </div>
    //   </div>
    // `
    document.body.appendChild(modal)
  }
}
