export default function setStaticAcrylicTexture(vm, theme) {
    if (theme.desktopBackgroundImage === vm.$withBase("/blurBackground/jennifer-bailey-10753.jpg")) {
        if (theme.isDarkTheme) {
            Object.assign(theme, {
                acrylicTexture40: {
                    background: `url(${vm.$withBase("/blurBackground/dark-40.png")}) left top / cover no-repeat fixed`
                },
                acrylicTexture60: {
                    background: `url(${vm.$withBase("/blurBackground/dark-60.png")}) left top / cover no-repeat fixed`
                },
                acrylicTexture80: {
                    background: `url(${vm.$withBase("/blurBackground/dark-80.png")}) left top / cover no-repeat fixed`
                }
            });
        } else {
            Object.assign(theme, {
                acrylicTexture40: {
                    background: `url(${vm.$withBase("/blurBackground/light-40.png")}) left top / cover no-repeat fixed`
                },
                acrylicTexture60: {
                    background: `url(${vm.$withBase("/blurBackground/light-60.png")}) left top / cover no-repeat fixed`
                },
                acrylicTexture80: {
                    background: `url(${vm.$withBase("/blurBackground/light-80.png")}) left top / cover no-repeat fixed`
                }
            });
        }
    } else {
        if (theme.useFluentDesign && !theme.haveAcrylicTextures) {
            theme.generateAcrylicTextures(theme, newTheme => theme.updateTheme(newTheme));
        }
    }
}
