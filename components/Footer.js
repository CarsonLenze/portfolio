export function Footer() {
  return (
    <div className="bg-[#e9ecef]">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-[#0008] dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>&copy; Carson Lenze. All Rights Reserved.</p>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            <a
              href="https://www.instagram.com/carsonlenze/"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <i
                  className={`fab fa-instagram fa-3x socialdark`}
                />
            </a>
            <a
              href="https://discordapp.com/users/404336524491227149/"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <i
                  className={`fab fa-discord fa-3x socialdark`}
                />
            </a>
            <a
              href="https://www.twitter.com/carsonlenze/"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <i
                  className={`fab fa-twitter fa-3x socialdark`}
                />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}