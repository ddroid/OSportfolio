import t from "../../i18n/i18n";

export default function EmailWindow() {
  return (
    <div class='flex flex-col items-center justify-center h-full w-full rounded-b-md text-center'>
        <img src='/apps/email.png' class='w-[100px] mb-4' alt='Contact icon' />
        <p class='text-white text-2xl mb-4'>{t("app.email.content.title")}</p>
        <p class='text-white text-lg mb-4'>{t("app.email.content.subtitle")}</p>
        <div class='flex flex-col gap-3'>
          <a href='mailto:contactahmadmunir@gmail.com' class='text-gray-400 hover:text-white text-2xl hover:scale-105 transition' target='_blank'>contactahmadmunir@gmail.com</a>
          <a href='https://www.linkedin.com/in/ddroid/' class='text-gray-400 hover:text-white text-2xl hover:scale-105 transition' target='_blank'>linkedin.com/in/ddroid</a>
          <a href='https://github.com/ddroid' class='text-gray-400 hover:text-white text-2xl hover:scale-105 transition' target='_blank'>github.com/ddroid</a>
          <a href='https://x.com/ddroid_dev' class='text-gray-400 hover:text-white text-2xl hover:scale-105 transition' target='_blank'>x.com/ddroid_dev</a>
          <a href='https://discord.com/users/1085441777886040064' class='text-gray-400 hover:text-white text-2xl hover:scale-105 transition' target='_blank'>discord/@ddroid</a>
          <a href='https://fosstodon.org/@ddroid' class='text-gray-400 hover:text-white text-2xl hover:scale-105 transition' target='_blank'>fosstodon.org/@ddroid</a>
        </div>
    </div>
  )
}
