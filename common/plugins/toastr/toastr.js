import './toastr.scss'

class Toastr {
  show({ type, title, message, closable, duration, position }) {
    this.type = type
    this.title = title
    this.message = message
    this.closable = closable
    this.position = position || 'top-right'
    this.duration = duration || 1000
    this.initialToastr()
  }

  success(message, options) {
    this.show({ message, type: 'success', ...options })
  }

  warning(message, options) {
    this.show({ message, type: 'warning', ...options })
  }

  error(message, options) {
    this.show({ message, type: 'error', ...options })
  }

  info(message, options) {
    this.show({ message, type: 'info', ...options })
  }

  initialToastr() {
    const div = document.createElement('div')
    div.className = this.type ? `toastr ${this.type}` : 'toastr'
    div.style = `--delay: ${this.duration}ms`
    const titleHtml = this.title ? `<div class="toastr-content--title">${this.title}</div>` : ''
    const closableButton = document.createElement('div')
    closableButton.className = 'toastr-content--close'
    closableButton.innerHTML = '&times;'
    const template = `
        <div class="toastr-content">
            <div class="toastr-content--icon">
                <i class="toastr-icon ${this.type}-circle"></i>
            </div>
            <div class="toastr-content--main">
              ${titleHtml}
              <div class="toastr-content--text" style="${this.title ? '' : 'color: #212121'}">${this.message}</div>
            </div>
            ${this.closable ? closableButton.outerHTML : ''}
        </div>
    `
    div.innerHTML = template
    let toastr = null
    const toastrTopRight = document.getElementById('toastr-top-right')
    const toastrBottomRight = document.getElementById('toastr-bottom-right')
    const toastrTopLeft = document.getElementById('toastr-top-left')
    const toastrBottomLeft = document.getElementById('toastr-bottom-left')
    switch (this.position) {
      case 'top-right':
        if (toastrTopRight) {
          toastr = toastrTopRight
        } else {
          const newToastrTopRight = document.createElement('div')
          newToastrTopRight.id = 'toastr-top-right'
          document.body.appendChild(newToastrTopRight)
          toastr = newToastrTopRight
        }
        break
      case 'bottom-right':
        if (toastrBottomRight) {
          toastr = toastrBottomRight
        } else {
          const newToastrBottomRight = document.createElement('div')
          newToastrBottomRight.id = 'toastr-bottom-right'
          document.body.appendChild(newToastrBottomRight)
          toastr = newToastrBottomRight
        }
        break
      case 'top-left':
        if (toastrTopLeft) {
          toastr = toastrTopLeft
        } else {
          const newToastrTopLeft = document.createElement('div')
          newToastrTopLeft.id = 'toastr-top-left'
          document.body.appendChild(newToastrTopLeft)
          toastr = newToastrTopLeft
        }
        break
      case 'bottom-left':
        if (toastrBottomLeft) {
          toastr = toastrBottomLeft
        } else {
          const newToastrBottomLeft = document.createElement('div')
          newToastrBottomLeft.id = 'toastr-bottom-left'
          document.body.appendChild(newToastrBottomLeft)
          toastr = newToastrBottomLeft
        }
        break
      default:
        if (toastrTopRight) {
          toastr = toastrTopRight
        } else {
          const newToastrTopRight = document.createElement('div')
          newToastrTopRight.id = 'toastr-top-right'
          document.body.appendChild(newToastrTopRight)
          toastr = newToastrTopRight
        }
        break
    }
    toastr.appendChild(div)
    function findAndRemoveToastr() {
      const topRight = document.querySelector('#toastr-top-right')
      const bottomRight = document.querySelector('#toastr-bottom-right')
      const topLeft = document.querySelector('#toastr-top-left')
      const bottomLeft = document.querySelector('#toastr-bottom-left')
      if (topRight) {
        const toastrTopRight = topRight.querySelectorAll('.toastr')
        if (toastrTopRight.length === 0) topRight.remove()
      }
      if (bottomRight) {
        const toastrBottomRight = bottomRight.querySelectorAll('.toastr')
        if (toastrBottomRight.length === 0) bottomRight.remove()
      }
      if (topLeft) {
        const toastrTopLeft = topLeft.querySelectorAll('.toastr')
        if (toastrTopLeft.length === 0) topLeft.remove()
      }
      if (bottomLeft) {
        const toastrBottomLeft = bottomLeft.querySelectorAll('.toastr')
        if (toastrBottomLeft.length === 0) bottomLeft.remove()
      }
    }
    setTimeout(() => {
      div.remove()
      findAndRemoveToastr()
    }, this.duration + 400)
    const closeButton = document.querySelectorAll('.toastr-content--close')
    if (closeButton) {
      closeButton.forEach((element) => {
        element.onclick = () => {
          element.parentElement.parentElement.remove()
          findAndRemoveToastr()
        }
      })
    }
  }
}
export default new Toastr()
