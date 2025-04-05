import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import { BeverageType,CreamerType, SyrupType, BaseBeverageType} from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0] as BaseBeverageType,
    creamers: creamers,
    currentCreamer: creamers[0] as CreamerType,
    syrups: syrups,
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
      this.currentBeverage && (this.currentName = this.currentBeverage.name,
        this.currentTemp = this.currentBeverage.temp,
        this.currentBase = this.currentBeverage.base,
        this.currentSyrup = this.currentBeverage.syrup,
        this.currentCreamer = this.currentBeverage.creamer)
    /*  this.currentBase = this.currentBeverage?.base || this.bases[0];
    this.currentCreamer = this.currentBeverage?.creamer || this.creamers[0];
    this.currentSyrup = this.currentBeverage?.syrup || this.syrups[0];
    this.currentTemp = this.currentBeverage?.temp || this.temps[0];
    this.currentName = this.currentBeverage?.name || "";*/
    },
    

  },
  persist: true,
});
