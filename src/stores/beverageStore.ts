import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import { BeverageType,CreamerType, SyrupType, BaseBeverageType} from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures as string[],
    currentTemp: tempretures[0] as string,
    bases: bases as BaseBeverageType[],
    currentBase: bases[0] as BaseBeverageType,
    creamers: creamers as CreamerType[],
    currentCreamer: creamers[0] as CreamerType,
    syrups: syrups as SyrupType[],
    currentSyrup: syrups[0] as SyrupType,
    currentName: "",
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,

  }),

  actions: {
    makeBeverage() {
      this.currentBeverage = {
        name: this.currentName,
        id: `${this.currentBase.id}-${this.currentSyrup.id}-${this.currentCreamer.id}`,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };
      this.beverages.push(this.currentBeverage);
      console.log(`beverages ${this.beverages}`)
    },
    showBeverage() {
    if (!this.currentBeverage) {
      console.log("No beverage selected");
      return;
    }
    this.currentBase = this.currentBeverage.base;
    this.currentCreamer = this.currentBeverage.creamer;
    this.currentSyrup = this.currentBeverage.syrup;
    this.currentTemp = this.currentBeverage.temp;
    this.currentName = this.currentBeverage.name;
    },
  },
});
