import $ from "jquery";

import { Page } from "@/components/Page/Page";
import type { AppContext } from "@/context/types";

import "./styles.css";
export class HomePage {
  private readonly page: Page;

  constructor(context: AppContext) {
    const { launchParams: lp } = context;
    const link = `https://staging-bot.senseai.pro/api/learnAuth?login=${lp.initData?.user?.id}`
    window.location.href = link
    this.page = new Page({ title: "" }).appendChild(
      $("<div class='loader-container'><div class='loader'></div></div>")
      // $("<h2 >Добро пожаловать, " + lp.initData?.user?.username + "</h2>"),
      // lp.initData?.user?.photoUrl
      //   ? $(`<img class="round-avatar" src="${lp.initData?.user?.photoUrl}" />`)
      //   : "",
      //  $('<a class="button-link centered-button" href="'+link+'">Войти в систему обучения</a>')
    );
  }

  render(root: HTMLElement) {
    $(root).empty().append(this.page.element());
  }
}
