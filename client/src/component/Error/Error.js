import React from 'react'

function Error() {
  return (
    <div>
        <section className="flex items-center h-full  dark:bg-gray-900 text-green-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto ">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl ">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</a>
		</div>
	</div>
</section>
    </div>
  )
}

export default Error