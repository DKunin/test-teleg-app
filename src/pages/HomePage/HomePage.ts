import $ from "jquery";

import { Page } from "@/components/Page/Page";
import type { AppContext } from "@/context/types";

import "./styles.css";
export class HomePage {
  private readonly page: Page;

  constructor(context: AppContext) {
    const { launchParams: lp } = context;
    console.log(lp.initData)
    this.page = new Page({ title: "" }).appendChild(
      $("<h2 >Добро пожаловать, " + lp.initData?.user?.username + "</h2>"),
      lp.initData?.user?.photoUrl
        ? $(`<img class="round-avatar" src="${lp.initData?.user?.photoUrl}" />`)
        : "",
      $(
        '<a class="button-link centered-button" href="http://185.251.90.61:3939/learnAuth?login='+lp.initData?.user?.id+'">Войти Local</a>'
      ), $('<a class="button-link centered-button" href="https://staging-bot.senseai.pro/api/learnAuth?login='+lp.initData?.user?.id+'">Войти Staging</a>')
    );
  }

  render(root: HTMLElement) {
    $(root).empty().append(this.page.element());
  }
}
