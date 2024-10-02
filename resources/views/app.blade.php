<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-light.min.css" />
    <!-- style -->
    <style>
        .matx-loader {
            display: inline-block;
            position: absolute;
            width: 40px;
            height: 40px;
            left: 0;
            right: 0;
            top: calc(50% - 20px);
            margin: auto;
        }

        .matx-loader img {
            position: absolute;
            height: 25px;
            width: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
        }

        .matx-loader div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 40px;
            height: 40px;
            margin: 0;
            border: 3.4px solid #1976d2;
            border-radius: 50%;
            animation: matx-loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            border-color: #1976d2 transparent transparent transparent;
        }

        .matx-loader div:nth-child(1) {
            animation-delay: -0.45s;
        }

        .matx-loader div:nth-child(2) {
            animation-delay: -0.3s;
        }

        .matx-loader div:nth-child(3) {
            animation-delay: -0.15s;
        }

        @keyframes matx-loader {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    </style>
    @vite('resources/js/app.tsx')
    @inertiaHead
</head>

<body>

    <div id="root" data-page="{{ json_encode($page) }}">
        <div class="matx-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

    @inertia
</body>

</html>
