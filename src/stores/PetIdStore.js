import { observable, action, runInAction } from 'mobx'
import SetLocalStorage from 'utils/setLocalStorage'
import PetsService from 'services/PetsService'

class PetIdStore {
  constructor() {
    this.petsService = new PetsService()
    this.setLocalStorage = new SetLocalStorage()
  }

  @observable id = ''
  @observable pet = []
  @observable name = []
  @observable images = []
  @observable gender = ''
  @observable age = ''
  @observable phone = ''
  @observable categorie = ''
  @observable activity = ''
  @observable lat = null
  @observable lng = null
  @observable userName = ''
  @observable isLoading = false
  @observable petIsEdit = false
  @observable mapPosition = []
  @observable defaultPosition = [
    {
      lat: -34.61315,
      lng: -58.37723,
    },
  ]

  @action
  setPetIsEdit() {
    const userConnected = this.setLocalStorage.getUser()
    if (userConnected.email === this.pet.user.email) {
      this.petIsEdit = true
    }
  }

  @action
  async getPetId(id) {
    this.isLoading = true
    try {
      const response = await this.petsService.getPetId(id)

      runInAction(() => {
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
        this.pet = response
        this.images = this.pet.image
        this.setPetIsEdit()
      })
    } catch (e) {
      runInAction(() => {
        console.log(e)
      })
    }
  }
}

export default PetIdStore