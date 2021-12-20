<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-4">
      <form id="new-prod">
        <fieldset>
          <legend id="legend-prod">Nuevo producto</legend>
          <!-- Aquí los inputs y botones del form -->
          <div class="form-group hide">
            <label for="newprod-id">id:</label>
            <input type="text" class="form-control" id="newprod-id" readonly />
          </div>
          <div class="form-group">
            <label for="newprod-name">Nombre:</label>
            <input
              type="text"
              class="form-control"
              id="newprod-name"
              required
              v-model="nameProduct"
            />
          </div>
          <div class="form-group">
            <label for="newprod-price">Precio/u.:</label>
            <input
              type="number"
              class="form-control"
              id="newprod-price"
              required
              min="0"
              step="0.01"
              v-model.number="priceProduct"
            />
          </div>
          <div class="form-group">
            <label for="newprod-name">Unidades:</label>
            <input
              type="number"
              class="form-control"
              id="newprod-units"
              required
              min="0"
              v-model.number="unitsProduct"
            />
          </div>
          <button
            id="boton"
            type="submit"
            class="btn btn-default btn-primary"
            v-on:click.prevent="addProduct"
          >
            Añadir
          </button>
          <button type="reset" class="btn btn-danger" id="show-table">
            Reset
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</template>


<script>
import { APIService } from "../service/Api";
import { store } from "./../service/store";

const api = new APIService();
export default {
  name: "form-product",
  data() {
    return {
      nameProduct: "",
      priceProduct: "",
      unitsProduct: "",
    };
  },
  methods: {
    addProduct() {
      if (this.nameProduct && this.priceProduct && this.unitsProduct)
        api
          .addProduct({
            units: this.unitsProduct,
            price: this.priceProduct,
            name: this.nameProduct,
          })
          .then((response) => console.log(response) ,this.clearForm())
          .catch((error) => store.addErrorMensage(error));
        
    },
    clearForm(){
      this.unitsProduct =''
      this.priceProduct= ''
      this.nameProduct=''
    }
  },
};
</script>