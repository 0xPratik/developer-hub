import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Grid } from '@/components/products/Grid'
import { MobileAppGrid } from './MobileAppGrid'

export function SwitcherDialog({ children, props }) {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {children({ isOpen, setIsOpen })}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
        {...props}
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed inset-0 bg-neutral-900/50 backdrop-blur"
          aria-hidden="true"
        />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-x-0 bottom-0 overflow-y-auto sm:inset-0">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="relative mx-auto w-full rounded-xl bg-white p-4 shadow-xl ring-1 ring-black ring-opacity-5 dark:border dark:border-slate-600 dark:bg-neutral-900 sm:w-auto">
              <div
                className="absolute right-5 text-black hover:cursor-pointer dark:text-white z-50"
                onClick={(e) => {
                  e.stopPropagation, setIsOpen(false)
                }}
              >
                Close
              </div>

              <MobileAppGrid
                className="relative sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4"
                onClick={() => setIsOpen(false)}
              />
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
