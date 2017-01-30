
/**
 * Deque
 */
class Deque<T> {
  _values: T[]
  _currentStartPos: number  // can be -1, if set is empty
  constructor() {
    this._values = []
    this._currentStartPos = -1
  }

  // const
  // ----------------------
  get size(): number{
    return this._values.length - (this._currentStartPos + 1)
  }
  isEmpty(): boolean{
    return this.size === 0
  }
  front(): T {
    if (this.isEmpty()) throw RangeError("Is empty!")
    return this._values[this._currentStartPos+1]
  }
  back(): T {
    if (this.isEmpty()) throw RangeError("Is empty!")
    return this._values[this._values.length-1]
  }
  makeArray(): T[]{
    return this._values.slice(this._currentStartPos+1)
  }
  fill(value: T) {
    for (let i = this._currentStartPos+1; i < this._values.length; i++)
      this._values[i] = value
  }
  clear() {
    this.fill(void 0)
    this._currentStartPos = this._values.length
  }
  // ----------------------

  pushBack(value: T){ this._values.push(value); }
  pushFront(value: T){
    if (this._currentStartPos === -1){
      let len = this._values.length
      let t = Array((len << 1) + 1)
      for (let i = 0; i < len; i++){
        t[i+len+1] = this._values[i]
      }
      this._currentStartPos = len
      this._values = t
    }

    this._values[this._currentStartPos--] = value
  }
}
