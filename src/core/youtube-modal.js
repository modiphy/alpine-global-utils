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

    const parentClasses = [
      'tw-fixed',
      'tw-inset-0',
      'tw-overflow-x-hidden',
      'tw-overflow-y-auto',
      'tw-transition',
      'tw-z-1000',
    ]

    modal.classList.add(...parentClasses)
    modal.setAttribute('x-cloak', '')
    modal.setAttribute('x-show', 'youtubeModalVideoId')
    modal.setAttribute('x-transition:enter', 'tw-ease-out tw-duration-300')
    modal.setAttribute('x-transition:enter-start', 'tw-opacity-0')
    modal.setAttribute('x-transition:enter-end', 'tw-opacity-100')
    modal.setAttribute('x-transition:leave', 'tw-ease-in tw-duration-150')
    modal.setAttribute('x-transition:leave-start', 'tw-opacity-100')
    modal.setAttribute('x-transition:leave-end', 'tw-opacity-0')
    modal.innerHTML = `
      <div class="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-px-4 tw-pt-4 tw-text-center">
        <div
            class="tw-fixed tw-inset-0 tw-transition-opacity"
            aria-hidden="true"
        >
            <div class="tw-absolute tw-inset-0 tw-bg-gray-900 tw-opacity-90 tw-backdrop-blur-lg"></div>
        </div>
        <div class="tw-absolute tw-top-0 tw-right-0 tw-hidden tw-pt-4 tw-pr-4 tw-sm:block">
            <button
                @click="youtubeModalVideoId = ''"
                type="button"
                class="tw-text-white tw-rounded-md tw-hover:text-text-white/60 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-white"
            >
                <span class="tw-sr-only">Close</span>
                <!-- Heroicon name: outline/x -->
                <svg
                    class="tw-w-6 tw-h-6 tw-md:w-12 tw-md:h-12"
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
            x-transition:enter="tw-ease-out tw-duration-300 tw-scale-95 tw-delay-200"
            x-transition:enter-start="tw-opacity-0"
            x-transition:enter-end="tw-opacity-100"
            x-transition:leave="tw-ease-in tw-duration-100"
            x-transition:leave-start="tw-opacity-100"
            x-transition:leave-end="tw-opacity-0 tw-scale-95"
            class="tw-container tw-max-w-screen-lg tw-mx-auto tw-transition-all"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
        >
            <div class="tw-relative tw-w-full tw-aspect-w-16 tw-aspect-h-9">
                <iframe
                    class="tw-absolute tw-w-full tw-h-full tw-overflow-hidden"
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

    document.body.appendChild(modal)
  }
}
